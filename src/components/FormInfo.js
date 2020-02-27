import React from 'react';

const FormInfo = props => {
    return (
        <div>
            {props.members.map(member => (
                <div key={member.id}>
                    <p>{member.name}</p>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </div>
            ))}
        </div>
    )
}
export default FormInfo;