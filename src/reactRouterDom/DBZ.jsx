import React, { useState } from 'react'
import { createSearchParams, useSearchParams } from 'react-router-dom'

export default function DBZ() {
    const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>
        {searchParams.get('dbz-character') && <h1>Selected Radio: {searchParams.get('dbz-character')} </h1>}

        {

            ['Goku', 'Vegeta', 'Picolo', 'Gohan'].map((dbCharacter, id)=>{
                return(
                    <div key={id}>
                        <input 
                            type="radio" 
                            value={dbCharacter.toLocaleLowerCase()}
                            checked={searchParams.get('dbz-character') === dbCharacter.toLocaleLowerCase()}
                            onChange={(e)=>{
                                setSearchParams(createSearchParams({'dbz-character': e.target.value}))
                            }}
                        />
                        <label>{dbCharacter}</label>
                    </div>
                )
            })
        }
      
    </div>
  )
}
