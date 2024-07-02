import { useMemo } from 'react';
import * as yup from 'yup';
import { Box, Flex } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  BaseButton,
  ErrorMessage,
  handleAxiosError,
  HomeContainer,
  Input,
  PATH,
  styleToken,
  Typography,
} from '@/shared';
import { http } from '@/shared/api';

type SignupInput = {
  email: string;
  password: string;
  passwordCheck: string;
  name: string;
  nickname: string;
};

const validationSchema = yup
  .object({
    email: yup.string().email('유효한 이메일 형식이 아닙니다.').required('이메일을 입력해주세요.'),
    password: yup
      .string()
      .min(8, '8글자 이상 입력해주세요.')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        '한 개 이상의 영문자, 숫자, 특수문자를 포함해야 합니다.',
      )
      .required('비밀번호를 입력해주세요.'),
    passwordCheck: yup
      .string()
      .oneOf([yup.ref('password'), undefined], '비밀번호가 일치하지 않습니다.')
      .required('비밀번호를 다시 입력해주세요.'),
    name: yup
      .string()
      .matches(/^[가-힣]{2,10}$/, '2글자 이상 10글자 이하의 한글만 가능합니다.')
      .required('이름을 입력해주세요.'),
    nickname: yup
      .string()
      .matches(/^[가-힣]{2,10}$/, '2글자 이상 10글자 이하의 한글만 가능합니다.')
      .required('닉네임을 입력해주세요.'),
  })
  .required();

export const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupInput>({
    resolver: yupResolver(validationSchema),
  });

  const postSignup = async (data: SignupInput) => {
    try {
      const responseSignup = await http.post<{
        code: string;
        reason: string;
      }>('/api/v1/users', data);
      if (responseSignup.data?.code === 'USER_400_1') {
        alert(responseSignup.data.reason);
        return;
      }
      alert('회원가입이 완료되었습니다.');
      navigate(PATH.MAIN);
    } catch (e) {
      const errorResponse = handleAxiosError(e);
      if (errorResponse.reason) {
        alert(errorResponse.reason);
      } else {
        alert(errorResponse.message);
      }
    }
  };

  const handleClickSignup: SubmitHandler<SignupInput> = (data) => {
    console.log('signup', data);
    postSignup(data);
  };

  const isDisabledSubmit = useMemo(() => Object.keys(errors).length > 0, [errors]);

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
            {errors.email && (
              <ErrorMessage message={errors.email?.message} style={{ paddingBottom: '10px', marginTop: '-6px' }} />
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
              <ErrorMessage message={errors.password?.message} style={{ paddingBottom: '10px', marginTop: '-6px' }} />
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
            {errors.passwordCheck && (
              <ErrorMessage
                message={errors.passwordCheck?.message}
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
            {errors.name && (
              <ErrorMessage message={errors.name?.message} style={{ paddingBottom: '10px', marginTop: '-6px' }} />
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
            {errors.nickname && (
              <ErrorMessage message={errors.nickname?.message} style={{ paddingBottom: '10px', marginTop: '-6px' }} />
            )}
          </Box>
        </Flex>
        <BaseButton
          type="submit"
          theme="active"
          fontColor={styleToken.color.white}
          disabled={isDisabledSubmit}
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
