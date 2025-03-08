# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Getting Bun


```bash
# To dev, install bun

powershell -c "irm bun.sh/install.ps1|iex" # Windows

curl -fsSL https://bun.sh/install | bash # Macos/Linux

```

# Update Path
```bash
# Check if bun is installed 
& "$env:USERPROFILE\.bun\bin\bun" --version
```
If bun is found, run to add it to your path

```bash
[System.Environment]::SetEnvironmentVariable(
    "Path",
    [System.Environment]::GetEnvironmentVariable("Path", "User") + ";$env:USERPROFILE\.bun\bin",
    [System.EnvironmentVariableTarget]::User
)
```

## Developing

Install dependencies (only required once)
```bash
bun i
```

## Dev
```bash
bun dev --open
```

---
If you did things right, you should hopefully see the page, if not, find help

