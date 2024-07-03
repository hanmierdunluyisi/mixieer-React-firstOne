import styles from './Button.module.css';

function Button() {
    const inlineStyles = {
        backgroundColor: 'red',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    return(
        <>
        <button className={styles.button}>Clike me</button>
        <button style={inlineStyles}>Clike me</button>
        </>
    );
}

export default Button;