"use client";

import { formatter } from "@/lib/utils";
import { useEffect, useState } from "react";

// const formatter = new Intl.NumberFormat('ma-MA', {
//   style: 'currency',
//   currency: 'MAD',
// });

interface CurrencyProps {
  value?: any;
}

const Currency: React.FC<CurrencyProps> = ({
  value = 0
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

//   let price = formatter.format(Number(value))


  return ( 
    <div className="font-semibold">
      {value} MAD
    </div>
  );
}

export default Currency;