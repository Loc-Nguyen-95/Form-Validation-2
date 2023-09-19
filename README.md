# Form-Validation-2 😛
react-hook-form, @mui/meterial, TextField, Controller, BoxControll

## Import

useState
useForm, Controller

TextField, 
Box, 
FormControll, 
InputLabel,
Select, MenuItem
# function App
## useForm()
register,
control,
handleSubmit,
formState: { errors }

## function submitData (data) => log( "res:", data )

## Form 
onSubmit={handleSubmit(submitForm)}

### TextField 
type="text"
placeholder="...."
{...register("firstName", { 
    required: ...
    maxLength: .... 
  }
}

{ errors.firstName && ..... }

### Controller 
name="lastName"
control
rules
render = { (field : { onChange, value } )  => 
  #### TextField 
    type
    placeholder
    onChange ={ e => onChange ( e.target.value ) } 
    value = { value } 
}  

{ errors.lastName && ..... }


### Box 
#### Controller 
##### FormControll
    



