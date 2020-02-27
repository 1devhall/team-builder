import React, {useState} from 'react';

 const Form = props => {
    const [member, setMember] = useState([
        {
            name:'',
            email:'',
            role:'',
        }
    ]);

    const handleChanges = e => {
        setMember({...member,[e.target.name]: e.target.value});
    };

    const submitForm = e => {
        e.preventDefault();
        props.addMember(member);
        setMember({name: '', email: '', role:''});
    };

    return(
        <form onSubmit = {submitForm}>
            <div>
                <input htmlFor='name' type='text'
                 name= 'name' placeholder= 'Name'
                onChange={handleChanges} value={member.name}/>
            </div>
            <div>
                <input htmlFor='email' type='email'
                 name= 'email' placeholder= 'Email'
                onChange={handleChanges} value={member.email}/>
            </div>
            <div>
                <input htmlFor='role' type='text'
                 name= 'role' placeholder= 'Role'
                onChange={handleChanges} value={member.role}/>
            </div>
            <button type='submit'>Add Team Member</button>
        </form>
    )
    
}

export default Form;