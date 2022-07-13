import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { Form, Button } from 'react-bootstrap'
import React from 'react'

function FilterInput (props: any) {
  return <>
    <Button onClick={props.onClick} variant={props.show ? 'danger' : 'primary'} size="sm" className="float-end">
      {props.show ? 'Cбросить фильтр' : 'Включить фильтр'}
    </Button>
    {props.show
      ? <div>
      &nbsp;
      <FloatingLabel
        controlId="floatingInput"
        label="Введите текст для фильтрации"
        className="mb-3"
      >
        <Form.Control onChange={props.onChange} type="text" value={props.value} placeholder="Текст" />
      </FloatingLabel>
    </div>
      : ''}
  </>
}

export default FilterInput
