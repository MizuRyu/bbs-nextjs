"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "ユーザー名は2文字以上で入力してください。" }),
  title: z
    .string()
    .min(2, { message: "タイトルは2文字以上で入力してください。" }),
  content: z
    .string()
    .min(10, { message: "本文は10文字以上で入力してください。" })
    .max(140, { message: "本文は140文字以下で入力してください。" }),
});

const CreateBBSPage = () => {
  const router = useRouter();
  //react hook formを作る
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      title: "",
      content: "",
    },
  });

  // z.infer -> 型だけを取り出して後続で定義する
  async function onSubmit(value: z.infer<typeof formSchema>) {
    const { username, title, content } = value;
    try {
      await fetch("http://localhost:3000/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, title, content }),
      });
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 w-1/2 px-7"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="username here." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>title</FormLabel>
              <FormControl>
                <Input placeholder="title here." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>content</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="content here."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
export default CreateBBSPage;
