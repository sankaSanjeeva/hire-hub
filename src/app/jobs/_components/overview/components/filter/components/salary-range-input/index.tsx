'use client';

import { useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useUpdateSearchParam } from '@/hook';
import { cn } from '@/lib/utils';

const minLimit = 0;
const maxLimit = 100000;

export default function SalaryRangeInput() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const [minValue, setMinValue] = useState(
    Number(searchParams.get('salaryMin') ?? minLimit)
  );
  const [maxValue, setMaxValue] = useState(
    Number(searchParams.get('salaryMax') ?? maxLimit)
  );

  const update = useUpdateSearchParam();

  const updateMinValue = () => {
    replace(
      update('salaryMin', minValue === minLimit ? null : minValue.toString()),
      { scroll: false }
    );
  };

  const updateMaxValue = () => {
    replace(
      update('salaryMax', maxValue === maxLimit ? null : maxValue.toString()),
      { scroll: false }
    );
  };

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxValue - 1000); // Ensure min is always less than max
    setMinValue(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minValue + 1000); // Ensure max is always greater than min
    setMaxValue(value);
  };

  const left = useMemo(
    () => ((minValue - minLimit) / (maxLimit - minLimit)) * 100,
    [minValue]
  );

  const right = useMemo(
    () => 100 - ((maxValue - minLimit) / (maxLimit - minLimit)) * 100,
    [maxValue]
  );

  return (
    <div>
      <div className="relative w-full">
        <div className="absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2 transform bg-white" />
        <div
          className="absolute top-1/2 h-1 -translate-y-1/2 transform bg-theme"
          style={{ left: `${left}%`, right: `${right}%` }}
        ></div>

        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={minValue}
          onChange={handleMinChange}
          onMouseUp={updateMinValue}
          className={cn(
            'pointer-events-auto absolute z-10 w-full appearance-none bg-transparent',
            '[&::-webkit-slider-runnable-track]:h-0 [&::-webkit-slider-runnable-track]:appearance-none',
            '[&::-webkit-slider-thumb]:mt-[-10px] [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-theme'
          )}
        />

        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={maxValue}
          onChange={handleMaxChange}
          onMouseUp={updateMaxValue}
          className={cn(
            'pointer-events-auto absolute z-10 w-full appearance-none bg-transparent',
            '[&::-webkit-slider-runnable-track]:h-0 [&::-webkit-slider-runnable-track]:appearance-none',
            '[&::-webkit-slider-thumb]:mt-[-10px] [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-theme'
          )}
        />
      </div>

      <div className="pt-5">
        Min Rs: {minValue}
        {maxValue !== maxLimit && ` - Max Rs: ${maxValue}`}
      </div>
    </div>
  );
}
