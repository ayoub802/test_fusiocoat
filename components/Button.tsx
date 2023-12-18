import React, { FC } from 'react'

interface ButtonComponentd {
    // Declare your parameters with their types
    title: string;
  }
export const Button: FC<ButtonComponentd> = ({ title }) => {
  return (
    <button className='inline-block cursor-pointer font-medium text__16 text-Mwhite !rounded-[24px] !border-Mblue bg-Mblue btnClass !py-[14px] uppercase'>{title}</button>
  )
}