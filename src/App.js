import './App.css';
import React, { useState } from "react";

import { useForm, Controller } from "react-hook-form";

import { TextField, Select, MenuItem, FormControl, InputLabel, Box } from "@mui/material";


function App() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm();

  // const [result, setResult] = useState("");

  const [value, setValue] = useState("");

  function submitData(data) {
    console.log("res", data)
  }

  // const handleChange = (event) => {
  //   setValue(event.target.value)
  // }

  return (
    <div className="App">
      <h1>Hello CodeSandBox</h1>
      <h2>Start edit to see some magic happen!</h2>
      <form onSubmit={handleSubmit(submitData)}>

        <TextField
          {...register("firstName", { required: true })}
          type="text"
          placeholder="First Name"
        />
        <br />
        {errors.firstName && <span>This field is required</span>}
        <br />

        <Controller
          name="lastName"
          control={control}

          rules={{ required: true }}
          render={ ({ field: { onChange, value } }) => (
            <TextField
              type="text"
              placeholder="Last Name"
              onChange={e => onChange(e.target.value)}
              value={value}
            />
          )}
        />
        <br />
        {errors.lastName && <span>This field is required</span>}
        <br />

        <Box>
          <Controller
            name="category"
            control={control}
            rules={{
              required: true
            }}
            render={ ( {field: { onChange, value } } ) => (
              <FormControl sx={{ minWidth: 220 }}>
                
                <InputLabel id="demo">Age</InputLabel>
                <Select
                  {...register("category", { required: true })}
                  onChange={e => onChange(e.target.value)}
                  value={value}
                >
                  <MenuItem value={"A"}>Category A</MenuItem>
                  <MenuItem value={"B"}>Category B</MenuItem>
                </Select>
                
              </FormControl>
            )}
          />
        </Box>

        <Box>{errors.category && <span>This field is required</span>}</Box>

        {console.log("err", errors)}

        <Box>
          <input type="submit" />
        </Box>
      </form>
    </div>
  );
}

export default App;
