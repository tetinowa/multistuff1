import Image from "next/image";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="w-full max-w-md">
        <Card className="w-[480px] h-[655px] rounded-xl flex justify-between p-8">
          <div className="flex gap-7 flex-col">
            <CardHeader className="flex flex-col gap-2 justify-start">
              <img className="w-[60px] h-[60px]" src="/logo.png" />
              <CardTitle>Join Us! 😎</CardTitle>
              <CardDescription>
                Please provide all current information accurately.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <FieldSet>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="firstname">First Name</FieldLabel>
                    <Input id="firstname" type="text" placeholder="Arthur" />
                    <FieldDescription>
                      First name cannot contain special characters or numbers.
                    </FieldDescription>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="lastname">Last Name</FieldLabel>
                    <Input
                      id="lastname"
                      type="text"
                      placeholder="Nightingale"
                    />
                    <FieldDescription>
                      Last name cannot contain special characters or numbers.
                    </FieldDescription>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="username">Username</FieldLabel>
                    <FieldDescription>
                      This username is already taken. Please choose another one.
                    </FieldDescription>
                    <Input id="username" type="text" placeholder="Excalibur" />
                  </Field>
                </FieldGroup>
              </FieldSet>
            </CardContent>
          </div>

          <CardFooter className="flex justify-center items-center">
            <Button>Continue 1/3</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
