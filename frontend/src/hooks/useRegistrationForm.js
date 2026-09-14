import { useCallback, useMemo, useState } from 'react'
import {
  EMPTY_FAMILY_MEMBER,
  EMPTY_FAMILY_MEMBERS,
  EMPTY_REGISTRATION,
  LOCAL_STORAGE_KEY,
} from '../constants/registration'

function getInitialState() {
  try {
    const stored = window.localStorage.getItem(LOCAL_STORAGE_KEY)

    if (!stored) {
      return { values: EMPTY_REGISTRATION, familyMembers: EMPTY_FAMILY_MEMBERS }
    }

    const parsed = JSON.parse(stored)

    return {
      values: { ...EMPTY_REGISTRATION, ...parsed.values },
      familyMembers:
        Array.isArray(parsed.familyMembers) && parsed.familyMembers.length > 0
          ? parsed.familyMembers.map((member) => ({ ...EMPTY_FAMILY_MEMBER, ...member }))
          : EMPTY_FAMILY_MEMBERS,
    }
  } catch {
    return { values: EMPTY_REGISTRATION, familyMembers: EMPTY_FAMILY_MEMBERS }
  }
}

export function useRegistrationForm() {
  const [{ values, familyMembers }, setState] = useState(getInitialState)

  const handleFieldChange = useCallback(({ target: { id, value } }) => {
    setState((current) => ({ ...current, values: { ...current.values, [id]: value } }))
  }, [])

  const handleCheckboxChange = useCallback(({ target: { id, checked } }) => {
    setState((current) => ({ ...current, values: { ...current.values, [id]: checked } }))
  }, [])

  const handleFamilyMemberChange = useCallback((index, fieldId, value) => {
    setState((current) => ({
      ...current,
      familyMembers: current.familyMembers.map((member, memberIndex) =>
        memberIndex === index ? { ...member, [fieldId]: value } : member,
      ),
    }))
  }, [])

  const addFamilyMember = useCallback(() => {
    setState((current) => ({
      ...current,
      familyMembers: [...current.familyMembers, { ...EMPTY_FAMILY_MEMBER }],
    }))
  }, [])

  const removeFamilyMember = useCallback((index) => {
    setState((current) => ({
      ...current,
      familyMembers: current.familyMembers.filter((_, memberIndex) => memberIndex !== index),
    }))
  }, [])

  const familyIncome = useMemo(
    () => familyMembers.reduce((total, member) => total + (Number(member.income) || 0), 0),
    [familyMembers],
  )

  const saveRegistration = useCallback(() => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ values, familyMembers }))
  }, [values, familyMembers])

  const clearRegistration = useCallback(() => {
    setState({ values: EMPTY_REGISTRATION, familyMembers: EMPTY_FAMILY_MEMBERS })
  }, [])

  return {
    values,
    familyMembers,
    familyIncome,
    handleFieldChange,
    handleCheckboxChange,
    handleFamilyMemberChange,
    addFamilyMember,
    removeFamilyMember,
    saveRegistration,
    clearRegistration,
  }
}
