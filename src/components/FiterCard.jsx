import { setSearchedQuery } from '@/Redux/jobSlices';
import { Label } from '@radix-ui/react-label';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { motion } from 'framer-motion'; // Importing Framer Motion

const fitlerData = [
    {
        fitlerType: "Location",
        array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai, Noida"],
    },
    {
        fitlerType: "Industry",
        array: ["Frontend Developer", "Backend Developer", "Full Stack Developer"],
    },
    {
        fitlerType: "Salary",
        array: [
            "0-10k",
            "10-20k",
            "20-30k",
            "30K-40k",
            "40K-50K",
            "50K - 1LPA",
            "1LPA - 5LPA",
            "5LPA - 10LPA",
        ],
    },
];

const FilterCard = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const dispatch = useDispatch();

    const changeHandler = (value) => {
        setSelectedValue(value);
    };

    useEffect(() => {
        dispatch(setSearchedQuery(selectedValue));
        // eslint-disable-next-line
    }, [selectedValue]);

    return (
        <motion.div
            className="w-full p-3 rounded-md hidden sm:block mt-11 border mb-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <motion.h1
                className="font-bold text-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Filter Jobs
            </motion.h1>
            <hr className="mt-3" />
            <RadioGroup value={selectedValue} onValueChange={changeHandler}>
                {fitlerData.map((data, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <h1 className="font-bold text-lg">{data.fitlerType}</h1>
                        {data.array.map((item, idx) => {
                            const itemId = `id${index}-${idx}`;
                            return (
                                <motion.div
                                    className="flex items-center space-x-2 my-2"
                                    key={itemId}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                                >
                                    <RadioGroupItem value={item} id={itemId} />
                                    <Label htmlFor={itemId}>{item}</Label>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                ))}
            </RadioGroup>
        </motion.div>
    );
};

export default FilterCard;
