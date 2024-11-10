import { setSearchedQuery } from '@/Redux/jobSlices';
import { Label } from '@radix-ui/react-label';

import  { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';


const fitlerData = [
    {
        fitlerType: "Location",
        array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai,Noida"]
    },
    {
        fitlerType: "Industry",
        array: ["Frontend Developer", "Backend Developer", "Full Stack Developer"]
    },
    {
        fitlerType: "Salary",
        array: ["0-10k","10-20k","20-30k","30K-40k", "40K-50K", "50K - 1LPA","1LPA - 5LPA","5LPA - 10LPA"]
    },
]

const FilterCard = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const dispatch = useDispatch();
    const changeHandler = (value) => {
        setSelectedValue(value);
    }
    useEffect(()=>{
        dispatch(setSearchedQuery(selectedValue));
        //eslint-disable-next-line
    },[selectedValue]);
    return (
        <div className='w-full bg-white p-3 rounded-md hidden sm:block '>
            <h1 className='font-bold text-lg'>Filter Jobs</h1>
            <hr className='mt-3' />
            <RadioGroup value={selectedValue} onValueChange={changeHandler}>
                {
                    fitlerData.map((data, index) => (
                        <div key={index}>
                            <h1 className='font-bold text-lg'>{data.fitlerType}</h1>
                            {
                                data.array.map((item, idx) => {
                                    const itemId = `id${index}-${idx}`
                                    return (
                                        <div className='flex items-center space-x-2 my-2' key={index}>
                                            <RadioGroupItem value={item} id={itemId} />
                                            <Label htmlFor={itemId}>{item}</Label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ))
                }
            </RadioGroup>
        </div>
    )
}

export default FilterCard