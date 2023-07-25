<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(LoginRequest $request): JsonResponse
    {
        $user = User::where('email', $request->email)->first();

        if (!$user) return response()->json([
            'message' => 'Email or password incorrect'
        ], 401);

        if (!Hash::check($request->password, $user->password)) return response()->json([
            'message' => 'Email or password incorrect'
        ], 401);

        return response()->json([
            'message' => 'Login success',
            'user' => [
                'name' => $user->name,
                'email' => $user->email,
                'accessToken' => $user->createToken('auth')->plainTextToken,
            ]
        ]);
    }

    public function logout(): JsonResponse
    {
        auth()->user()->tokens()->delete();

        return response()->json([
            'message' => 'Logout success'
        ]);
    }
}
