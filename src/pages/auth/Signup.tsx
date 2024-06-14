import { BaseButton, HomeContainer, Typography } from '@/shared';

export const Signup = () => {
  const handleClickSignup = () => {
    console.log('signup');
  };

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
      <BaseButton
        type="button"
        theme="active"
        style={{
          width: '300px',
          height: '40px',
          border: 'none',
          borderRadius: '6px',
        }}
        onClick={handleClickSignup}
      >
        회원가입
      </BaseButton>
    </HomeContainer>
  );
};
