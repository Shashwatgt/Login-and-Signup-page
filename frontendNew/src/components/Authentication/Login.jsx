import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import axios from "axios";
import { useState } from "react";
import { useToast } from "@chakra-ui/toast";


const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const toast = useToast();

  const login = ()=>{
    axios.post("http://localhost:3000/api/user/login", {
      email: email,
      password: password
    })
    .then(()=>{
       toast({
        title: "Logged in successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    })
    .catch((e)=>{
       toast({
        title: e.response.data.message,
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    })
  }

  return (
    <VStack spacing='5px'>

      <FormControl id="e-mail" isRequired>
        <FormLabel>E-mail</FormLabel>
        <Input
          placeholder="Enter Your E-mail address"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={login}
      >
        Log In
      </Button>

      <Button
        variant="solid"
        colorScheme="red"
        width="100%"
        onClick={() => {
          setEmail("guest@example.com");
          setPassword("123456");
        }}
      >
        Get Guest User Credentials
      </Button>
    </VStack>
  )
}

export default Login;
