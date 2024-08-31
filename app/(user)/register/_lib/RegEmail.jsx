'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { updateUserEmail } from "@/lib/appwrite.config";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function RegisterEmail() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const submitEmail = (data) => {
        updateUserEmail(data.email)
            .then(() => {
                toast(`${data.email} has been added to your email address`, { description: 'We will update any info at the address' });
                reset();
            })
            .catch((error) => toast('Try again', { description: 'Error occurred while updating email.' }));
    };

    return (
        <>
            <Card className="lg:w-[400px] w-[300px] mx-auto">
                <CardHeader>
                    <CardTitle>
                        <span className="text-xl font-bold text-amber-300">{'2)'} Update Your Email (Optional)</span>
                    </CardTitle>
                    <CardDescription className="text-gray-400 mt-2">
                        We may share info through mail
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="flex flex-col gap-6" onSubmit={handleSubmit(submitEmail)}>
                        <div>
                            <Input
                                type="email"
                                placeholder="your email address"
                                className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-600'} rounded-lg bg-gray-800 text-white`}
                                {...register('email', { required: true })}
                            />
                            {errors.email && <p className="mt-2 text-red-500 text-sm">Email is required</p>}
                        </div>
                        <Button className="w-full py-2 bg-amber-500 hover:bg-amber-600 transition-colors rounded-lg font-semibold text-white">Update</Button>
                    </form>
                </CardContent>
            </Card>
        </>
    );
}
