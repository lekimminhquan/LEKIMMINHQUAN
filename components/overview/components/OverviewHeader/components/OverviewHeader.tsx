'use client'
import React from 'react'
import styles from '@/components/overview/Overview.module.scss'
import {Image, rem, Text } from '@mantine/core'
import Logo from '@/public/assets/images/Logo.png'
import NextImage from 'next/image'
import SvgIcon from './IconFootball'
import { FiUser } from 'react-icons/fi'
const OverviewHeader = () => {
  return (
    <div className={styles.header}>
      <div className='flex items-center gap-5 md:gap-10'>
        <div className='md:w-[140px] md:h-[40px] w-[100px] h-[30px]'>
          <Image src={Logo} alt="logo" w='100%' h='100%' fit='contain' component={NextImage}/>
        </div>
        <div className={styles.item}>
          <SvgIcon/>
          <Text fw={600} size='12px' color='white' tt="uppercase" ff='Oswald'>Football</Text>
        </div>
      </div>
      <FiUser style={{color: 'white', fontSize: '20px', width: rem(20), height: rem(20)}}/>
    </div>
  )
}

export default OverviewHeader