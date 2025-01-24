import React from 'react'
import styles from '../Overview.module.scss'
import {Image, rem, Text } from '@mantine/core'
import Logo from '@/public/assets/images/Logo.png'
import NextImage from 'next/image'
import SvgIcon from './IconFootball'
import { FiUser } from 'react-icons/fi'
const OverviewHeader = () => {
  return (
    <div className={styles.header}>
      <div className='flex items-center gap-10'>
        <Image src={Logo} alt="logo" w={140} h={40} fit='contain' component={NextImage}/>
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