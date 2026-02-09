from django.shortcuts import redirect
from django.urls import reverse


class PasscodeLockMiddleware:
    """
    Blocks the whole site until a session flag is set by /unlock/.
    Allows: unlock page + static files + admin (optional).
    """

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        path = request.path

        # Allow unlock route and static/media files
        if path.startswith("/unlock/") or path.startswith("/static/"):
            return self.get_response(request)

        # (Optional) allow admin without passcode
        if path.startswith("/admin/"):
            return self.get_response(request)

        # If not unlocked, redirect to unlock
        if not request.session.get("unlocked", False):
            return redirect(reverse("unlock"))

        return self.get_response(request)
