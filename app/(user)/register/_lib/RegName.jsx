'use client'
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updateUserDetails } from "@/lib/appwrite.config";
import { useForm } from "react-hook-form";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
export function RegisterName() {

    const router = useRouter()
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const submitName = (data) => {
        updateUserDetails(data.username)
            .then(() => {
                toast(`Hello ${data.username}`, { description: 'Your name registered successfully.', action: { label: 'Home', onClick: () => redirect('/') } });
                reset();
                router.back();
            })
            .catch((error) => toast('Try again!', { description: 'Error occurred while updating name' }));
    };

    return (
        <>
            <Card className="lg:w-[400px] w-[300px] mx-auto ">
                <CardHeader>
                    <CardTitle>
                        <span className="text-xl font-bold text-amber-300">{'1)'} Update Your Name (must)</span>
                    </CardTitle>
                    <CardDescription className="text-gray-400 mt-2">
                        Help us identify you with your name!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="flex flex-col gap-6" onSubmit={handleSubmit(submitName)}>
                        <div>
                            <Label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">Name or Company Name</Label>
                            <Input
                                type="text"
                                id="username"
                                placeholder="Enter your name"
                                className={`w-full p-2 border ${errors.username ? 'border-red-500' : 'border-gray-600'} rounded-lg bg-gray-800 text-white`}
                                {...register('username', { required: true })}
                            />
                            {errors.username && <p className="mt-2 text-red-500 text-sm">Name is required</p>}
                        </div>
                        <Button className="w-full py-2 hover:bg-amber-600 transition-colors rounded-lg font-semibold">Update</Button>
                    </form>
                </CardContent>
            </Card>
        </>
    );
}
