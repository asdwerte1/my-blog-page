const Post = () => {
    const testUser = "Sam";
    const testPassword = "Password1";
    return (
        <>
            <header>
                <h1>Create new post</h1>
            </header>
            <LoginForm />
            <hr />
            <CreatePost />
        </>
    )
}

const LoginForm = () => {
    return (
        <>
            <div className="form">
                <p>Login required:</p>
                <form action="#" method="POST" id="login">
                    <div>
                        <label htmlFor="name">Username</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <div>
                        <input type="submit" value="Login" />
                    </div>
                </form>
            </div>
        </>
    )
}

const CreatePost = () => {
    return (
        <div className="form">
            <p>Welcome, write your new post</p>
            <form action="#" method="POST" id="newPost">
                <div>
                    <input type="text" name="title" id="title" placeholder="Title"/>
                </div>
                <div>
                    <textarea name="content" id="content" placeholder="Post..."></textarea>
                </div>
                <input type="submit" value="Submit post" id="submit"/>
            </form>
        </div>
    )
}

export default Post;