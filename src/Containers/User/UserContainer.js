import { connect } from "react-redux";
import User from "../../Components/User/UserComponent";
import { getUsers, addUser } from "../../Actions/User/UserActions";
const mapDispatchToProps = {
  getUsers,
  addUser,
};

const mapStateToProps = ({ userData }) => ({
  userData,
});
export default connect(mapStateToProps, mapDispatchToProps)(User);
