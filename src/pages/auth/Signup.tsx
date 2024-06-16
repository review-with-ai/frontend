import { Box, Flex } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { BaseButton, ErrorMessage, HomeContainer, Input, styleToken, Typography } from '@/shared';

type SignupInput = {
  email: string;
  password: string;
  passwordCheck: string;
  name: string;
  nickname: string;
};

export const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupInput>();

  const handleClickSignup: SubmitHandler<SignupInput> = (data) => {
    console.log('signup', data);
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
        회원가입
      </Typography>
      <form onSubmit={handleSubmit(handleClickSignup)}>
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
          <Box height="20px">
            {errors.password && (
              <ErrorMessage
                message="입력하신 내용을 다시 확인해주세요."
                style={{ paddingBottom: '10px', marginTop: '-6px' }}
              />
            )}
          </Box>
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
          <Box height="20px">
            {errors.password && (
              <ErrorMessage
                message="입력하신 내용을 다시 확인해주세요."
                style={{ paddingBottom: '10px', marginTop: '-6px' }}
              />
            )}
          </Box>
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
              placeholder="비밀번호 확인"
              style={{
                height: '46px',
              }}
              {...register('passwordCheck', { required: true })}
            />
          </Flex>
          <Box height="20px">
            {errors.password && (
              <ErrorMessage
                message="입력하신 내용을 다시 확인해주세요."
                style={{ paddingBottom: '10px', marginTop: '-6px' }}
              />
            )}
          </Box>
          <Flex
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            width="300px"
            border={`1px solid ${styleToken.color.gray200}`}
            borderRadius="6px"
          >
            <Input
              type="text"
              placeholder="이름"
              style={{
                height: '46px',
              }}
              {...register('name', { required: true })}
            />
          </Flex>
          <Box height="20px">
            {errors.password && (
              <ErrorMessage
                message="입력하신 내용을 다시 확인해주세요."
                style={{ paddingBottom: '10px', marginTop: '-6px' }}
              />
            )}
          </Box>
          <Flex
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            width="300px"
            border={`1px solid ${styleToken.color.gray200}`}
            borderRadius="6px"
          >
            <Input
              type="text"
              placeholder="닉네임"
              style={{
                height: '46px',
              }}
              {...register('nickname', { required: true })}
            />
          </Flex>
          <Box height="20px">
            {errors.password && (
              <ErrorMessage
                message="입력하신 내용을 다시 확인해주세요."
                style={{ paddingBottom: '10px', marginTop: '-6px' }}
              />
            )}
          </Box>
        </Flex>
        <BaseButton
          type="button"
          theme="active"
          style={{
            width: '300px',
            height: '40px',
            border: 'none',
            borderRadius: '6px',
          }}
        >
          회원가입
        </BaseButton>
      </form>
    </HomeContainer>
  );
};
