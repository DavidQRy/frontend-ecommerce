import { useGetProductField } from '@/api/geyProductField'
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'; // usa ambos del mismo sitio
import { FilterTypes } from '@/types/filters';
import React from 'react'

const FilterOrigin = () => {
  const { result, loading }: FilterTypes = useGetProductField()
  console.log(result);

  return (
    <div className='my-5'>
      <p className="mb-3 font-bold">Origen</p>

      {loading && <p>Cargando...</p>}

      {!loading && result?.schema?.attributes?.origin?.enum && (
        <RadioGroup defaultValue={result.schema.attributes.origin.enum[0]}>
          {result.schema.attributes.origin.enum.map((origin: string) => (
            <div key={origin} className='flex items-center space-x-2'>
              <RadioGroupItem value={origin} id={origin}/>
              <Label htmlFor={origin}>{origin}</Label>
            </div>
          ))}
        </RadioGroup>
      )}
    </div>
  )
}

export default FilterOrigin
