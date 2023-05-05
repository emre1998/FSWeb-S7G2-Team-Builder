
import './App.css';
import React,{useState} from 'react';
import Form from './component/Form';

function App() {
  const [teamMembers,setTeamMembers] = useState([
  {
    id: 1,
    name: "Jane Doe",
    email: "jane.doe@example.com",
    role: "Frontend Engineer",
  },
  {
    id: 2,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Backend Engineer",
  },
  {
    id: 3,
    name: "Alice Smith",
    email: "alice.smith@example.com",
    role: "Designer",
  },
  {
    id: 4,
    name: "Bob Smith",
    email: "bob.smith@example.com",
    role: "Frontend Engineer",
  },
  {
    id: 5,
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    role: "Backend Engineer",
  },
  {
    id: 6,
    name: "Lucy Brown",
    email: "lucy.brown@example.com",
    role: "Designer",
  },
  {
    id: 7,
    name: "David Johnson",
    email: "david.johnson@example.com",
    role: "Frontend Engineer",
  },
  {
    id: 8,
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
    role: "Backend Engineer",
  },
  {
    id: 9,
    name: "Frank Wilson",
    email: "frank.wilson@example.com",
    role: "Designer",
  },
  {
    id: 10,
    name: "Grace Wilson",
    email: "grace.wilson@example.com",
    role: "Frontend Engineer",
  },
]);

const addTeamMember = (newMember) => {
  setTeamMembers([...teamMembers,{...newMember,id:Date.now()}]);
};


  return (
    <div className='team-members'>
      <h1 className=''>My Awesome Team</h1>
      <ul>
        {teamMembers.map((member) => (
          <li key= {member.id} >
            <strong>{member.name}</strong> ({member.role}) - {member.email}
          </li>
        ))}
      </ul>
      <Form onSubmit={addTeamMember} />
    </div>
  );
}

export default App;
