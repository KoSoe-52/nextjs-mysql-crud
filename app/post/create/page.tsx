'use client'
import React,{ useState} from 'react'
import { useRouter } from 'next/navigation'
const CreatePage = () => {
    const [loading,setLoading] = useState(false);
    const route = useRouter()
    const [values, setValues] = useState({ // Form fields
        title: "",
        content :"",
        published: true,
        user_id: 1
    })
    function handleChange(e:any) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }));
    }
    const saveData = (e:any)=>{
        e.preventDefault();
        setLoading(true);
            console.log(values);
            fetch(`/api/posts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(values),
            })
            .then((response) => response.json())
            .then((data) => {
                if(data.success > 0){
                    alert(data.message);
                    route.push('/post')
                }
            })
    }
    return <div className="w-full max-w-5xl m-auto">
        <h1 className="text-3xl font-bold">Create</h1>
        <form onSubmit={saveData}>
            <input type="text" name="title" id="title" className="border border-slate-300 p-1 m-1"  onChange={ handleChange }/>
            <input type="text" name="content" id="content" className="border border-slate-300 p-1 m-1"  onChange={ handleChange }/>
            <button type="submit"  className="border border-slate-300 p-1 m-1">{loading?"Loading..":"Save"}</button>
        </form>
    </div>
}
export default CreatePage