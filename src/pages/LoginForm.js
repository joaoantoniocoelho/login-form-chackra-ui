import React, { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Icon,
} from "@chakra-ui/core";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <Flex width="100%" align="center" justifyContent="center">
      <Box
        p={8}
        maxWidth="500px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="md"
      >
        <Box textAlign="center">
          <Heading>Login</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form>
            <FormControl isRequired mt={10} mb={5}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="user@example.com"
                size="lg"
                onChange={(event) => setEmail(event.currentTarget.value)}
              />
            </FormControl>
            <FormControl isRequired mb={5}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="********"
                  size="lg"
                  onChange={(event) => setPassword(event.currentTarget.value)}
                />
                <InputRightElement width="3rem">
                    <Button h="1.5rem" size="sm" onClick={handlePasswordVisibility}>
                        {showPassword ? <Icon name="view-off" /> : <Icon name="view" />}
                    </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button
              width="100%"
              mt={4}
              type="submit"
              variantColor="teal"
              variant="outline"
            >
              Sign in
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}
