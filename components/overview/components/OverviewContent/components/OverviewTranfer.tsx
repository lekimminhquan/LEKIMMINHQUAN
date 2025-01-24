'use client'
import React from "react";
import { Image, Text } from '@mantine/core';
import ChartComponent from "./ChartComponent";

const OverviewTranfer = () => {
  return (
    <div className="bg-[#020C20] rounded-lg mt-6 grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col gap-4 p-4">
        <Text color="white" fw={700} size='md' ff='Be Vietnam Pro'>TRANSFER VALUE</Text>
        <ChartComponent />
        <div className=" flex flex-col gap-2 mt-2 font-medium text-sm">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <p className="border-t border-dashed border-[#82ca9d] w-5 h-0"></p>
              <Text color="gray.5" fw={400} size='xs' ff='Be Vietnam Pro'>Current player value</Text>
            </div>
            <Text color="gray.5" fw={400} size='xs' ff='Be Vietnam Pro'>11.6M $</Text>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <p className="border-t-2 border-solid border-[#1E90FF] w-5 h-0"></p>
              <Text color="gray.5" fw={400} size='xs' ff='Be Vietnam Pro'>Transfer fee</Text>
            </div>
            <Text color="gray.5" fw={400} size='xs' ff='Be Vietnam Pro'>66M $</Text>
          </div>
        </div>
      </div>


      <div className=" md:border-l border-[#2D3748] p-4">
        {[...Array(5)].map((_, index) => (
          <div key={index} className={`${index === 0 ? '' : 'border-t border-[#2D3748]'} flex items-center h-[60px]`}>
            <Image src="https://img.uniscore.com/football/team/j1l4rjnhpdxm7vx/image/medium" alt="Chelsea" w={35} h={35} mr={10}/>
            <div className="flex flex-col gap-2 w-full">
              <div className="flex justify-between items-center">
                <Text fw={400} size='sm' color="white" ff='Be Vietnam Pro'>Chelsea</Text>
                <p className="border-t border-solid border-[#48FF5A] w-2 h-0"></p>
              </div>
              <div className="flex justify-between items-center">
                <Text fw={400} size='11px' color="gray.5" ff='Be Vietnam Pro'>30 Jun 2020</Text>
                <Text fw={400} size='11px' color="#48FF5A" ff='Be Vietnam Pro'>End of loan</Text>
              </div>
            </div>
          </div>
        ))} 
      </div>
    </div>
  );
};

export default OverviewTranfer;
