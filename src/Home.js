import React, {Component} from 'react';
import AV from 'leancloud-storage';
import LogInAndSignUp from './components/logInAndSignUp';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodo: '',
            todoList: [],
            todoListId: null,
            currentUser: this.getCurrentUser()
        };
    }

    componentDidMount() {
        this.getUserTodos();
    }

    getUserTodos = () => {
        if (this.state.currentUser) {
            let query = new AV.Query('ToDo');
            query.find().then((todos) => {
                if (todos.length > 0) {
                    let {id, attributes: {content}} = todos[0];
                    this.setState({
                        todoList: JSON.parse(content),
                        todoListId: id
                    });
                }
            });
        }
    };

    keyPressed = (event) => {
        if (event.key === 'Enter') {
            this.setState({
                todoList: [
                    ...this.state.todoList,
                    {
                        title: this.state.newTodo,
                        createdAt: new Date(),
                        done: false
                    }
                ],
                newTodo: ''
            }, this.saveOrUpdateTodos);
        }
    };

    inputChange = (event) => {
        this.setState({newTodo: event.target.value});
    };

    checkboxChange = (event, index) => {
        const {todoList} = this.state;
        this.setState({
            todoList: [
                ...todoList.slice(0, index),
                {
                    ...todoList[index],
                    done: event.target.checked
                },
                ...todoList.slice(index + 1)
            ]
        }, this.saveOrUpdateTodos);
    };

    deleteOneTodo = (index) => {
        const {todoList} = this.state;
        this.setState({
            todoList: [
                ...todoList.slice(0, index),
                ...todoList.slice(index + 1)
            ]
        }, this.saveOrUpdateTodos);
    };

    saveOrUpdateTodos = () => {
        if (this.state.todoListId) {
            this.updateTodos();
        } else {
            this.saveTodos();
        }
    };

    updateTodos = () => {
        var todo = AV.Object.createWithoutData('ToDo', this.state.todoListId);
        todo.set('content', JSON.stringify(this.state.todoList));
        todo.save().then(() => {
            alert('修改成功');
        });
    };

    saveTodos = () => {
        var Todo = AV.Object.extend('ToDo');
        var todo = new Todo();
        todo.set('content', JSON.stringify(this.state.todoList));

        //set access control
        var acl = new AV.ACL();

        //only the current user can read and write
        acl.setReadAccess(AV.User.current(), true);
        acl.setWriteAccess(AV.User.current(), true);
        todo.setACL(acl);

        todo.save().then((todo) => {
            // 成功保存之后，执行其他逻辑
            this.setState({todoListId: todo.id});
            alert('保存成功');
        }, (error) => {
            // 异常处理
            alert('保存失败');
        });
    };

    getCurrentUser = () => {
        let current = AV.User.current();
        if (current) {
            let {id, createdAt, attributes: {username}} = current;
            return {id, createdAt, username};
        } else {
            return null;
        }
    };

    //注册 或 登录 成功
    setCurrentUser = () => {
        const currentUser = this.getCurrentUser();
        this.setState({currentUser}, this.getUserTodos);
    };

    logOut = () => {
        AV.User.logOut();
        this.setState({currentUser: null});
        window.location.reload();
    };

    render() {
        const {newTodo, todoList, currentUser} = this.state;

        return (
            <div>
                {
                    currentUser ?
                        <section id="todo">
                            <button onClick={this.logOut}>登出</button>
                            <p>您好，{currentUser.username}</p>
                            <div className="newTasks">
                                <input type="text" value={newTodo}
                                       onChange={this.inputChange}
                                       onKeyPress={this.keyPressed}
                                />
                            </div>
                            <ol className='todos'>
                                {
                                    todoList.map((todo, index) => (
                                        <li key={index}>
                                            <input type="checkbox" checked={todo.done}
                                                   onChange={(event) => this.checkboxChange(event, index)}/>
                                            {todo.title}
                                            <span>{todo.done ? '已完成' : '未完成'}</span>
                                            <button onClick={() => this.deleteOneTodo(index)}>删除</button>
                                        </li>
                                    ))
                                }
                            </ol>
                        </section> :
                        <LogInAndSignUp setCurrentUser={this.setCurrentUser}/>
                }
            </div>
        );
    }
}

export default Home;