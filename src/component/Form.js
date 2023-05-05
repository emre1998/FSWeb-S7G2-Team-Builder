import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function MemberForm(props) {
  const [member, setMember] = useState({
    name: '',
    email: '',
    role: '',
  });

  const handleChange = (event) => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(member);
    setMember({ name: '', email: '', role: '' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="name">Name:</Label>
        <Input
          type="text"
          name="name"
          id="name"
          value={member.name}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup>
        <Label for="email">Email:</Label>
        <Input
          type="email"
          name="email"
          id="email"
          value={member.email}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup>
        <Label for="role">Role:</Label>
        <Input
          type="text"
          name="role"
          id="role"
          value={member.role}
          onChange={handleChange}
        />
      </FormGroup>

      <Button type="submit">Add Member</Button>
    </Form>
  );
}

export default MemberForm;
