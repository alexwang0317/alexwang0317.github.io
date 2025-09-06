<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import { onMount } from "svelte";

  let highlightLoaded = false;

  onMount(async () => {
    // Load Prism for syntax highlighting
    if (typeof window !== "undefined" && !(window as any).Prism) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css";
      document.head.appendChild(link);

      const script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js";
      script.onload = () => {
        const pythonScript = document.createElement("script");
        pythonScript.src =
          "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js";
        pythonScript.onload = () => {
          highlightLoaded = true;
          (window as any).Prism.highlightAll();
        };
        document.head.appendChild(pythonScript);
      };
      document.head.appendChild(script);
    }
  });
</script>

<Seo
  title="__post_init__ - Python Engineering Notes"
  description="Validate dataclass fields at instantiation time using __post_init__ for better encapsulation"
/>

<article class="layout-md py-12 mx-auto max-w-3xl px-6">
  <div class="mb-8">
    <a href="/python" class="text-blue-600 hover:underline text-sm"
      >← Back to Python</a
    >
  </div>

  <h1 class="text-3xl font-bold mb-4">__post_init__</h1>

  <div class="text-lg text-neutral-700 mb-8 leading-relaxed">
    Validate dataclass fields at instantiation time using <code
      >__post_init__</code
    > for better encapsulation and data integrity. Learn how to enforce business
    rules right when objects are created.
  </div>

  <div class="prose prose-neutral max-w-none">
    <p>
      Let's say you're building a time-based system and you want to create an <code
        >Event</code
      > class. However, you want to ensure that the event is only valid if the end
      time comes after the start time, and you want this validation to happen at
      instantiation time for proper encapsulation.
    </p>

    <pre><code class="language-python"
        >from datetime import datetime
from dataclasses import dataclass

@dataclass
class Event:
    name: str
    start_time: datetime
    end_time: datetime

# This creates an invalid event without any validation
event = Event(
    name="Meeting",
    start_time=datetime(2025, 9, 6, 14, 0),
    end_time=datetime(2025, 9, 6, 13, 0)  # Ends before it starts!
)

print("Event duration:", event.end_time - event.start_time)  # Negative duration!</code
      ></pre>

    <p>
      The issue above is that we can create logically invalid objects. The event
      ends before it starts, which doesn't make sense in our domain. We need to
      validate our data at creation time to maintain data integrity and prevent
      bugs downstream.
    </p>

    <p>
      The <code>__post_init__</code> method is called automatically after the
      dataclass <code>__init__</code>
      method completes. This is the perfect place to add validation logic that depends
      on multiple fields.
    </p>

    <pre><code class="language-python"
        >from datetime import datetime
from dataclasses import dataclass

@dataclass
class Event:
    name: str
    start_time: datetime
    end_time: datetime
    
    def __post_init__(self):
        if self.end_time &lt;= self.start_time:
            raise ValueError("End time must be after start time")

# Now this will raise an error immediately
try:
    event = Event(
        name="Invalid Meeting",
        start_time=datetime(2025, 9, 6, 14, 0),
        end_time=datetime(2025, 9, 6, 13, 0)
    )
except ValueError as e:
    print("Validation error:", e)  # Caught the invalid event!</code
      ></pre>

    <p>
      <code>__post_init__</code> is also useful for computing derived fields based
      on the input data:
    </p>

    <pre><code class="language-python"
        >from dataclasses import dataclass, field
from datetime import datetime, timedelta

@dataclass
class Event:
    name: str
    start_time: datetime
    end_time: datetime
    duration: timedelta = field(init=False)  # Not set during init
    is_all_day: bool = field(init=False)
    
    def __post_init__(self):
        # Validation
        if self.end_time &lt;= self.start_time:
            raise ValueError("End time must be after start time")
        
        # Compute derived fields
        self.duration = self.end_time - self.start_time
        
        # Check if it's an all-day event (exactly 24 hours)
        self.is_all_day = self.duration == timedelta(days=1)

event = Event(
    name="Conference",
    start_time=datetime(2025, 9, 6, 9, 0),
    end_time=datetime(2025, 9, 6, 17, 0)
)

print(f"Event '{"{"}event.name{"}"}' lasts", event.duration)
print("All-day event:", event.is_all_day)</code
      ></pre>

    <p>
      <code>__post_init__</code> provides immediate validation, clean encapsulation,
      and automatic execution. Use it when you need to validate relationships between
      multiple fields, perform data normalization, compute derived fields, or enforce
      business rules at object creation time.
    </p>

    <p>
      <code>__post_init__</code> ensures your objects are always in a valid state
      from the moment they're created, leading to more robust and maintainable code.
    </p>
  </div>

  <div class="border-t pt-8 mt-12">
    <p class="text-sm text-neutral-500">
      Questions or feedback? Feel free to reach out!
    </p>
  </div>
</article>

<style>
  article {
    width: 100%;
    max-width: 48rem;
    margin-left: auto;
    margin-right: auto;
  }

  :global(.prose) {
    line-height: 1.7;
  }

  :global(.prose p) {
    margin: 1.25rem 0;
    color: #374151;
  }

  :global(.prose h2) {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 2rem 0 1rem 0;
    color: #1f2937;
  }

  :global(.prose ul) {
    margin: 1rem 0;
    padding-left: 1.5rem;
  }

  :global(.prose li) {
    margin: 0.5rem 0;
    color: #374151;
  }

  :global(pre) {
    background-color: #2d2d2d !important;
    padding: 1.25rem !important;
    border-radius: 0.5rem !important;
    overflow-x: auto !important;
    margin: 1.5rem 0 !important;
    max-width: 100%;
    border: 1px solid #374151;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  :global(pre code) {
    background: none !important;
    padding: 0 !important;
    font-size: 0.875rem !important;
    line-height: 1.6 !important;
    font-family: "SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "Consolas",
      monospace;
    color: #e5e7eb;
  }

  :global(code:not(pre code)) {
    background-color: #f3f4f6;
    padding: 0.125rem 0.375rem;
    border-radius: 0.25rem;
    font-size: 0.875em;
    color: #1f2937;
    font-family: "SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "Consolas",
      monospace;
    border: 1px solid #e5e7eb;
  }

  :global(.token.keyword) {
    color: #c792ea !important;
  }

  :global(.token.string) {
    color: #c3e88d !important;
  }

  :global(.token.function) {
    color: #82aaff !important;
  }

  :global(.token.class-name) {
    color: #ffcb6b !important;
  }

  :global(.token.comment) {
    color: #546e7a !important;
    font-style: italic;
  }

  :global(.token.decorator) {
    color: #f78c6c !important;
  }

  :global(.token.number) {
    color: #f78c6c !important;
  }

  @media (max-width: 768px) {
    article {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }
</style>
