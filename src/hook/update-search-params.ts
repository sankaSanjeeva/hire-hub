import { usePathname, useSearchParams } from 'next/navigation';

const useUpdateSearchParam = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams);

  return (key: string, value: string | null) => {
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    return `${pathname}?${params.toString()}`;
  };
};

export default useUpdateSearchParam;
