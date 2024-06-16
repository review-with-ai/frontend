import { Box, Flex } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { BaseButton, ErrorMessage, HomeContainer, Input, styleToken, Typography } from '@/shared';

type LoginInput = {
  email: string;
  password: string;
};

export const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginInput>();

  const handleClickLogin: SubmitHandler<LoginInput> = (data) => {
    console.log('login', data);
  };

  console.log(watch('email'));

  return (
    <HomeContainer>
      <Typography
        variant="h1"
        style={{
          width: '100%',
          margin: '20px 0',
          textAlign: 'center',
        }}
      >
        로그인
      </Typography>
      <form onSubmit={handleSubmit(handleClickLogin)}>
        <Flex
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          width="100%"
          gap="14px"
          margin="20px 0"
        >
          <Flex
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            width="300px"
            border={`1px solid ${styleToken.color.gray200}`}
            borderRadius="6px"
          >
            <Input
              type="email"
              placeholder="이메일"
              style={{
                height: '46px',
              }}
              {...register('email', { required: true })}
            />
          </Flex>
          <Flex
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            width="300px"
            border={`1px solid ${styleToken.color.gray200}`}
            borderRadius="6px"
          >
            <Input
              type="password"
              placeholder="비밀번호"
              style={{
                height: '46px',
              }}
              {...register('password', { required: true })}
            />
          </Flex>
        </Flex>
        <BaseButton
          type="submit"
          theme="active"
          style={{
            width: '300px',
            height: '40px',
            border: 'none',
            borderRadius: '6px',
          }}
        >
          로그인
        </BaseButton>
        <Box height="20px">
          {errors.password && (
            <ErrorMessage
              message={'이메일 또는 비밀번호를 잘못 입력했습니다.\n입력하신 내용을 다시 확인해주세요.'}
              style={{
                marginTop: '20px',
              }}
            />
          )}
        </Box>
      </form>
    </HomeContainer>
  );
};
