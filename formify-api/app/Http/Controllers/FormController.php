<?php

namespace App\Http\Controllers;

use App\Http\Requests\FormRequest;
use App\Http\Resources\FormDetailResource;
use App\Http\Resources\FormResource;
use App\Models\Form;
use Illuminate\Http\JsonResponse;

class FormController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json([
            'message' => 'Get all forms success',
            'forms' => FormResource::collection(auth()->user()->forms),
        ]);
    }

    public function show(string $slug): JsonResponse
    {
        $form = Form::where('slug', $slug)->first();

        if (!$form) return response()->json([
            'message' => 'Form not found',
        ], 404);

        $allowed_domains = json_decode($form->allowed_domains);
        $user_domain = explode('@', auth()->user()->email)[1];

        if (
            $allowed_domains &&
            (!in_array($user_domain, $allowed_domains) &&
                auth()->user()->id !== $form->creator_id)
        ) return response()->json([
            'message' => 'Forbidden access',
        ], 403);

        return response()->json([
            'message' => 'Get form success',
            'form' => new FormDetailResource($form),
        ]);
    }

    public function store(FormRequest $request): JsonResponse
    {
        $data = $request->all();
        $data['allowed_domains'] = json_encode($request->allowed_domains);
        $data['creator_id'] = auth()->user()->id;

        $form = Form::create($data);

        return response()->json([
            'message' => 'Create Form Success',
            'form' => new FormResource($form),
        ]);
    }
}
