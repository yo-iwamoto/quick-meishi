import { k } from '@kuma-ui/core';

export function TopPage() {
  return (
    <k.main
      display='flex'
      flexDir='column'
      justify='center'
      minHeight='calc(100vh - 49px)'
    >
      <k.div px={24}>
        <k.form
          borderRadius={20}
          bgColor='colors.white'
          display='grid'
          gap={16}
          boxShadow='0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
          maxWidth={600}
          mx='auto'
          p={20}
          borderWidth={1}
          borderStyle='solid'
          borderColor='colors.black'
          action='/preview'
        >
          <k.h1 textAlign='center' fontWeight={700}>
            ポートフォリオの URL を入力してください
          </k.h1>

          <k.input
            p={12}
            placeholder='https://example.com'
            borderRadius={12}
            borderWidth={1}
            borderStyle='solid'
            borderColor='colors.gray'
            fontSize={20}
            required
            name='portfolio'
          />
        </k.form>
      </k.div>
    </k.main>
  );
}
