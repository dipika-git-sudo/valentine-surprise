from django.conf import settings
from django.shortcuts import redirect, render

# Create your views here.
from django.shortcuts import render


def home(request):
    return render(request, "home.html", {"featured": "img1.jpg"})


def propose(request):
    return render(request, "propose.html")


def surprise(request):
    return render(request, "surprise.html")


def gallery(request):
    # You can hardcode image filenames here
    images = [
        "img1.jpg",
        "img2.jpg",
        "img3.jpg",
        "img4.jpg",
    ]
    return render(request, "gallery.html", {"images": images})


def message(request):
    return render(request, "message.html")


def yes(request):
    return render(request, "propose.html")


def no(request):
    return render(request, "propose.html")


def unlock(request):
    error = ""
    if request.method == "POST":
        code = request.POST.get("code", "").strip()
        if code and code == settings.SITE_PASSCODE:
            request.session["unlocked"] = True
            return redirect("/")  # or redirect("/propose/")
        error = "Wrong passcode. Try again 💖"
    return render(request, "unlock.html", {"error": error})
