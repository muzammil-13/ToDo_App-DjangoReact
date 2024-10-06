import React, { useState } from 'react';
import TodoDataService from '../services/todos';
import { Link, useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

const AddTodo = props => {
    const history = useHistory();
    let editing = false;
    let initialTodoTitle = "";
    let initialTodoMemo = "";

    if (props.location.state && props.location.state.currentTodo) {
        editing = true;
        initialTodoTitle = props.location.state.currentTodo.title;
        initialTodoMemo = props.location.state.currentTodo.memo;
    }

    const [title, setTitle] = useState(initialTodoTitle);
    const [memo, setMemo] = useState(initialTodoMemo);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const onChangeTitle = e => {
        const title = e.target.value;
        setTitle(title);
    }

    const onChangeMemo = e => {
        const memo = e.target.value;
        setMemo(memo);
    }

    const saveTodo = () => {
        setError("");
        var data = {
            title: title,
            memo: memo,
            completed: false,
        }

        if (editing) {
            TodoDataService.updateTodo(
                props.location.state.currentTodo.id,
                data, props.token)
                .then(response => {
                    setSubmitted(true);
                    console.log(response.data);
                    setTimeout(() => history.push("/todos"), 1500);
                })
                .catch(e => {
                    console.log(e);
                    setError("Failed to update todo. Please try again.");
                })
        } else {
            TodoDataService.createTodo(data, props.token)
                .then(response => {
                    setSubmitted(true);
                    console.log(response.data);
                    setTimeout(() => history.push("/todos"), 1500);
                })
                .catch(e => {
                    console.log(e);
                    setError("Failed to create todo. Please try again.");
                });
        }
    }

    return (
        <Container>
            {error && <Alert variant="danger">{error}</Alert>}
            {submitted ? (
                <div>
                    <h4>Todo submitted successfully</h4>
                    <p>Redirecting to todo list...</p>
                </div>
            ) : (
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>{editing ? "Edit" : "Create"} Todo</Form.Label>
                        <Form.Control
                            type="text"
                            required
                            placeholder="Enter todo title"
                            value={title}
                            onChange={onChangeTitle}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Description: </Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={memo}
                            onChange={onChangeMemo}
                        />
                    </Form.Group>
                    <Button variant="info" onClick={saveTodo}>
                        {editing ? "Edit" : "Add"} To-do
                    </Button>
                </Form>
            )}
        </Container>
    )
}

export default AddTodo;