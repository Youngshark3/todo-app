'use client';

import ChevronDown from 'lucide-react';
import nanoid from 'nanoid';
import { useState, useEffect } from 'react';

const AddTodo = ({addTodo, completeAll}: any) => {
const [value, setValue] = useState<string>("");
const handleChange = (e: any) => {
    setValue(e.target.value);
};
const handleSubmit = (e: any) => {
    e.preventDefault();
    if (value.trim() !== "") {
        addTodo(value);
        setValue("");
        }
}

return (
    <div className="w-full flex space-x-4 justify-start items-center py-4 px-4 border-2 border-gray-300 focus-within:border-red-300 focus-within:shadow-md focus-within:shadow-red-300">
        <button onClick={() => completeAll()}>
            <ChevronDown />
        </button>
        <form action="" onSubmit={handleSubmit}>
            <input type='text' className='focus:outline hover:cursor-pointer'
            placeholder='What needs to be done'
            value={value}
            onChange={handleChange} 
            />
        </form>
    </div>
);
};
export default AddTodo;
