import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-void flex items-center justify-center">
      <SignIn
        appearance={{
          variables: {
            colorBackground: '#111110',
            colorText: '#F2EDD7',
            colorPrimary: '#E11D48',
            colorInputBackground: '#080806',
            colorInputText: '#F2EDD7',
            borderRadius: '0px',
          },
        }}
      />
    </div>
  )
}
