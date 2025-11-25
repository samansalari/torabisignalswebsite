'use client'

import React from 'react'
import * as Icons from '@untitledui/icons'

interface IconProps {
  name: string
  className?: string
}

export const Icon: React.FC<IconProps> = ({ name, className }) => {
  // Convert kebab-case to PascalCase and add Icon suffix
  const iconName = name
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('') + 'Icon' as keyof typeof Icons

  const IconComponent = Icons[iconName] as React.ComponentType<any>

  if (!IconComponent) {
    // Return null if icon not found
    return null
  }

  return <IconComponent className={className} />
}



