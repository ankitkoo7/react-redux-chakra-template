import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { FaUserAlt, FaLock, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginAction } from "../store/_actions/authAction";
import { loginScheme } from "../validations/loginSchema";

export const Login = () => {
  const dispatch = useDispatch();
  const nagivate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values) => {
    dispatch(loginAction(values, nagivate))
  };

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <Formik
            onSubmit={handleSubmit}
            validationSchema={loginScheme}
            initialValues={initialValues}
          >
            {({ values, errors, touched, handleChange }) => (
              <Form>
                <Stack
                  spacing={4}
                  p="1rem"
                  backgroundColor="whiteAlpha.900"
                  boxShadow="md"
                >
                  <FormControl>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        children={<Icon as={FaUserAlt} color="gray.300" />}
                      />
                      <Input
                        name="email"
                        type="email"
                        placeholder="email address"
                        onChange={handleChange}
                        value={values.email}
                      />
                    </InputGroup>
                    {errors.email && touched.email && (
                      <Text fontSize="12px" color="brand.negative">{errors.email}</Text>
                    )}
                  </FormControl>
                  <FormControl>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        color="gray.300"
                        children={<Icon as={FaLock} color="gray.300" />}
                      />
                      <Input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        onChange={handleChange}
                        value={values.password}
                      />
                      <InputRightElement width="4.5rem" justifyContent="end">
                        <Button
                          h="1.75rem"
                          size="sm"
                          p="0"
                          mr="1"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          <Icon as={FaEyeSlash} />
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    {errors.password && touched.password && (
                        <Text fontSize="12px" color="brand.negative">{errors.password}</Text>
                      )}

                    <FormHelperText textAlign="right">
                      <Link to="/forgot-password">forgot password?</Link>
                    </FormHelperText>
                  </FormControl>
                  <Button
                    borderRadius={0}
                    type="submit"
                    variant="solid"
                    colorScheme="teal"
                    width="full"
                  >
                    Login
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Box>
      </Stack>
      <Box></Box>
    </Flex>
  );
};
