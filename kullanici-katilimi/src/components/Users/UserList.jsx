
const UserList = (props) => {

    const {userList} = props;
    return (
        <>
            <ul>
                {
                    userList &&
                    userList.map((user, index) => <li key={index}>{user.email}</li>)
                }
            </ul>
        </>
    )
}

export default UserList;