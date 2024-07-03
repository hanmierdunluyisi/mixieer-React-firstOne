import PropTypes from 'prop-types';


function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"} </p>
        </div>

    );

}
Student.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
};
Student.defaultProps = {
    name: "John Doe",
    age: 20,
    isStudent: true,
}

export default Student;