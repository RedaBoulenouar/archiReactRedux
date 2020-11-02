import { connect } from "react-redux";
import User from "../../Components/User/UserComponent";
import { getUsers } from "../../Actions/User/UserActions";
const mapDispatchToProps = {
  getUsers,
};

const mapStateToProps = ({ userData }) => ({
  userData,
});
export default connect(mapStateToProps, mapDispatchToProps)(User);
