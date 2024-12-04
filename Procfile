release: python manage.py migrate
web: gunicorn --bind 0.0.0.0:$PORT --workers 1 --threads 8 --timeout 0 life_care_planner.wsgi:application
worker: celery -A life_care_planner worker -l INFO --beat --concurrency 2
