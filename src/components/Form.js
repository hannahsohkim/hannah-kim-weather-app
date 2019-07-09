import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box'

const Form = (props) => {
  return(
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="flex-start"
      textAlign="right"
    >
      <form onSubmit={props.getWeather}>
        <Box order={3} m={1}>
          <label> City: <input type="text" name="city" />
          </label>
        </Box>

        <Box order={4} m={1}>
          <label> Country: <input type="text" name="country" />
          </label>
        </Box>

        <Box order={5} m={1}>
          <Button
            type="submit"
            variant="contained"
            color="primary">
            Get Weather
          </Button>
        </Box>

      </form>
    </Box>
  )
}

export default Form;