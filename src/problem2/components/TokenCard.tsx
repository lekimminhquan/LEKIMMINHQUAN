import { Box, Text } from "@mantine/core"
import styles from '../Problem2.module.scss'
import { Prices } from "../Problem2"
import { formatDate } from "@/src/utils/formatDate"
import { getTokenIcon } from "@/src/utils/tokenIcons"
import Image from "next/image"

type TokenCardProps = {
  token: Prices
}
const TokenCard = ({token}: TokenCardProps) => {
  return (
    <Box className={styles.tokenCard}>
      <div className="w-full flex justify-between">
        <div className="flex items-center gap-2 ">
          <Image src={getTokenIcon(token.currency)} alt={token.currency} width={25} height={25} />
          <Text size="sm" fw={550} color="blue.5">{token.currency}</Text>
        </div>
        <Text size="sm" fw={600} color="dark.5">{token.price}</Text>
      </div>
      <Text mt='auto' ta='center' size="sm" fw={500} color="dark.5">{formatDate(token.date)}</Text>
    </Box>
  )
}
export default TokenCard