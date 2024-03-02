"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import MultipleSelector,{Option} from "../ui/MultipleSelector";
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


  


const OPTIONS: Option[] = [
    { label: 'AIML', value: 'AIML' },
    { label: 'Fullstack', value: 'Fullstack' },
    // Add other options as needed
  ];

export function JobFairForm() {
  const form = useForm();

  const onSubmit = (data:any) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}  className="space-y-8 p-4">
        <FormItem>
          <FormLabel>Phone</FormLabel>
          <FormControl>
            <Input
              placeholder="Enter your phone number"
              {...form.register("phoneNumber")}
            />
          </FormControl>
          <FormMessage>
            {form.formState.errors.phoneNumber && (
              <p>{String(form.formState.errors.phoneNumber.message)}</p>
            )}
          </FormMessage>
        </FormItem>

        <FormItem>
          <FormLabel>Company Name</FormLabel>
          <FormControl>
            <Input
              placeholder="Enter your company name"
              {...form.register("companyName")}
            />
          </FormControl>
          <FormMessage>
            {form.formState.errors.companyName && (
              <p>{String(form.formState.errors.companyName.message)}</p>
            )}
          </FormMessage>
        </FormItem>

        <FormItem>
          <FormLabel>Company Linkedin</FormLabel>
          <FormControl>
            <Input
              placeholder="Enter your company LinkedIn"
              {...form.register("companyLinkedin")}
            />
          </FormControl>
          <FormMessage>
            {form.formState.errors.companyLinkedin && (
              <p>{String(form.formState.errors.companyLinkedin.message)}</p>
            )}
          </FormMessage>
        </FormItem>

        <FormItem>
          <FormLabel>Email Address</FormLabel>
          <FormControl>
            <Input
              placeholder="Enter your email address"
              {...form.register("emailAddress")}
            />
          </FormControl>
          <FormMessage>
            {form.formState.errors.emailAddress && (
              <p>{String(form.formState.errors.emailAddress.message)}</p>
            )}
          </FormMessage>
        </FormItem>

        <FormItem>
          <FormLabel>Position</FormLabel>
          <FormControl>
            <Input
              placeholder="Enter your position"
              {...form.register("position")}
            />
          </FormControl>
          <FormMessage>
            {form.formState.errors.position && (
              <p>{String(form.formState.errors.position.message)}</p>
            )}
          </FormMessage>
        </FormItem>

        <FormItem>
          <FormLabel>Company Website</FormLabel>
          <FormControl>
            <Input
              placeholder="Enter your company website"
              {...form.register("companyWebsite")}
            />
          </FormControl>
          <FormMessage>
            {form.formState.errors.companyWebsite && (
              <p>{String(form.formState.errors.companyWebsite.message)}</p>
            )}
          </FormMessage>
        </FormItem>

        <FormItem>
          <FormLabel>Domains</FormLabel>
          <FormControl>
            <MultipleSelector
              value={form.getValues("domains")}
              onChange={(value) => form.setValue("domains", value)}
              defaultOptions={OPTIONS}
              placeholder="Please select your suited domain"
            />
          </FormControl>
        
        </FormItem>
        <Button type="submit"  className="w-full">Submit</Button>
      </form>
    </Form>
  );
}
